import React from "react";
import TodoItem from "./TodoItem";
import { render, screen} from "@testing-library/react";

describe('<TodoItem />', () => {
    const sampleTodo = {
        id: 1,
        text: 'TDD 배우기',
        done: false
    };

    const setup = (props = {}) => {
        const initialprops = { todo: sampleTodo }
        render(<TodoItem {...initialprops} {...props} />);
        const todo = props.todo || initialprops.todo;
        const span = screen.getByText(todo.text)
        const button = screen.getByText('삭제')
        return {
            span,
            button
        }
    }

    it('has span and button', () => {
        const { span, button } = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    })
})