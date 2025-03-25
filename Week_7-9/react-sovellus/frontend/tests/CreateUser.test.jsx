import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import CreateUser from '../src/components/CreateUser';

vi.mock('axios');

describe('CreateUser Component', () => {
  it('renders form inputs and submit button', () => {
    render(<CreateUser />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create user/i })).toBeInTheDocument();
  });

  it('updates input values on change', () => {
    render(<CreateUser />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
  });

  it('submits the form and resets inputs on success', async () => {
    axios.post.mockResolvedValueOnce({ data: { message: 'User created!' } });
    render(<CreateUser />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: /create user/i }));

    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/users', {
      name: 'John Doe',
      email: 'john@example.com',
    }));

    expect(screen.getByLabelText(/name/i).value).toBe('');
    expect(screen.getByLabelText(/email/i).value).toBe('');
  });

  it('displays alert on successful user creation', async () => {
    axios.post.mockResolvedValueOnce({});
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<CreateUser />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: /create user/i }));

    await waitFor(() => expect(alertMock).toHaveBeenCalledWith('User created!'));

    alertMock.mockRestore();
  });

  it('displays alert on failed user creation', async () => {
    axios.post.mockRejectedValueOnce(new Error('Request failed'));
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<CreateUser />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: /create user/i }));

    await waitFor(() => expect(alertMock).toHaveBeenCalledWith('Failed to create user'));

    alertMock.mockRestore();
  });
});
