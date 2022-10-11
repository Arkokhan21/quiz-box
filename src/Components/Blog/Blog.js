import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y text-center">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>React</p>
                            <p className="text-gray-600">11 Oct 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-indigo-500">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is the purpose of React Router?
                                </p>
                            </div>
                        </div>
                        <p className="text-violet-500">
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>React</p>
                            <p className="text-gray-600">11 Oct 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-indigo-500">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How does context API works?
                                </p>
                            </div>
                        </div>
                        <p className="text-violet-500">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>React</p>
                            <p className="text-gray-600">11 Oct 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-indigo-500">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is useRef?
                                </p>
                            </div>
                        </div>
                        <p className="text-violet-500">
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef only returns one item. It returns an Object called current.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="cursor-pointer inline-flex items-center font-semibold">
                    See all blogs
                    <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default Blog;