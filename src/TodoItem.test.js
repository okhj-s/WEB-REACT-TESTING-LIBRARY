import React from "react";
import TodoItem from "./TodoItem";
import { fireEvent, render, screen } from "@testing-library/react";

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

    it('shows line-through on span when done is true', () => {
        const { span } = setup({ todo: {...sampleTodo, done: true } });
        expect(span).toHaveStyle('text-decoration: line-through;');
    })

    it('does not show line-through on span when done is false', () => {
        const { span } = setup({ todo: {...sampleTodo, done: false }});
        expect(span).not.toHaveStyle('text-decoration: line-through')
    })

    it('calls onToggle', () => {
        const onToggle = jest.fn();
        const { span } = setup({ onToggle });
        fireEvent.click(span);
        expect(onToggle).toHaveBeenCalledWith(sampleTodo.id)
    })

    it('calls onRemove', () => {
        const onRemove = jest.fn();
        const { button } = setup({ onRemove });
        fireEvent.click(button);
        expect(onRemove).toHaveBeenCalledWith(sampleTodo.id)
    })
})