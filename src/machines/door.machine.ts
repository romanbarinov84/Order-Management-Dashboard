import { assign, createMachine } from 'xstate';



export const doorMachine = createMachine({
    id: 'door',
    initial: 'closed',

    context: {
        attempts:0,
        opens: 0,
        pin: 0,
        lastDate: null,
        locked:true,
    },

    states: {
        closed: {
            on: {
                OPEN: {
                    target: 'opened',
                    guard:({context}) => {
                        return !context.locked;
                    },
                    actions: [
                        () => {
                            console.log('Door was opened');
                        },

                        assign({
                            attempts: ({ context }) => context.attempts + 1,
                            opens: ({ context }) => context.opens + 1,
                            
                        }),
                    ],
                },
            },
        },
        opened:{
            on:{
                CLOSE:{
                    target:"closed"
                }
            }
        }
    },
});
