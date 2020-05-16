export const SET_TEST = 'SET_TEST';

export const fetchTest = () => {
    return async dispatch => {
        fetch('http://192.168.0.102:3000/users/test',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            }),
            }).then((response) => response.json())
            .then((json) => {
                if(json.success == 0) {
                    alert(json.errorMsg);
                } else {
                    console.log(json.test);
                    dispatch({
                        type: SET_TEST, test: json.test
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

export const setTest = (test) => {
    return { type: SET_TEST, test: test };
};