export const rnd = () => (
    { 
        type: 'RND', 
        payload: Math.floor(Math.random() * 10)
    }
);

export const dec = () => ({ type: 'DEC' });

export const inc = () => ({ type: 'INC' });