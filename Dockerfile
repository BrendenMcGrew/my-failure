# Install dependencies only when needed
FROM node:19-alpine3.16 AS deps
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./

RUN \
    if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm install; \
    else echo "Lockfile not found." && exit 1; \
    fi;

# Rebuild the source code only when needed
FROM node:19-alpine3.16 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . ./

RUN yarn build

# Production image, copy all the files and run node
FROM node:19-alpine3.16 AS runner
WORKDIR /app

ENV NODE_ENV production

EXPOSE 3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

CMD [ "node", "server.js"]
