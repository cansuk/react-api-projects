export const getData = async (url) => {

    fetch(url)
        .then(response => {
            // handle the response
            if (response.status === 200) {
                let data = await response.text();
                return data;
                // handle data
            }
        })
        .catch(error => {
            // handle the error
            // Todo error management
            throw error;
        });

}