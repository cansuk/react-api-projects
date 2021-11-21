import { Dimmer, Loader } from "semantic-ui-react";

const Loading = () => {
    return (
        <div>
            <Dimmer active>
                <Loader>Loading...</Loader>
            </Dimmer>
        </div>
    )
}

export default Loading;
