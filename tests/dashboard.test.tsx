import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import {Dashboard} from "@mui/icons-material";

describe('Dashboard', () => {
    it('should render the dashboard', () => {
        render(<Dashboard />)

        const heading = screen.getByRole('heading', {
            name: /Welcome to NextJS/i,
        })

        expect(heading).toBeInTheDocument()
    })
})

