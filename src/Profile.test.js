import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username="hyunjiok" name="옥현지" />);
        expect(utils.container).toMatchSnapshot();
    })
    it('shows the props corrently', () => {
        render(<Profile username="hyunjiok" name="옥현지" />);
        screen.getByText("hyunjiok");
        screen.getByText("(옥현지)");
        screen.getByText(/옥/);
    })
})