import { FallingLines } from 'react-loader-spinner';
import {LoaderBlock} from 'components/Loader/Loader.styled'

export const Loader = () => (
    <LoaderBlock>
        <FallingLines width={110} height={110} color="#c8553d" />
    </LoaderBlock>
    
);
