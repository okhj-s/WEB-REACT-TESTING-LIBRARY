import React from "react";
import { render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe('<TodoForm />', () => {
    it('has input and a button', () => {
        render(<TodoForm />)
        screen.getByPlaceholderText('할 일을 입력하세요') // input이 있는지 확인
        screen.getByText('등록') // button이 있는지 확인
    })
})