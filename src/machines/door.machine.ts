import { assign, createMachine } from 'xstate';

export const doorMachine = createMachine({
    id: 'door',
    initial: 'closed',

    context: {
        attempts: 0,
        opens: 0,
        pin: '8888',
        lastDate: null,
        locked: true,
    },

    states: {
        closed: {
            on: {
                OPEN: {
                    target: 'opened',
                    guard: ({ context, event }) =>
                        !context.locked && event.pin === context.pin,
                    actions: [
                        () => {
                            console.log('Door was opened');
                        },

                        assign({
                            opens: ({ context }) => context.opens + 1,
                        }),
                    ],
                },
            },
        },
        opened: {
            on: {
                CLOSE: {
                    target: 'closed',
                },
            },
        },
    },
});
