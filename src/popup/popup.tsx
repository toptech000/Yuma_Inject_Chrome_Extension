import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

/**
 * Warning: Don't import router statically
 *
 * static import will cause unexpected behaviors in loader of react-router-dom
 */
const router = (await import('./router')).default;

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<RouterProvider router={router} />, root);
