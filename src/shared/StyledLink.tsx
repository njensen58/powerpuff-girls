import { x } from "@xstyled/styled-components";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";


interface ILinkProps extends PropsWithChildren {
    text: string;
    to: string;
    state?: Record<string, string>;
}

export function StyledLink(props: ILinkProps){
    return (
        <x.div 
					display="flex" 
					justifySelf="end" 
					bg="white" 
					padding={2}
					borderRadius="md"
				>
            <Link to={props.to} state={props.state}>{props.text}</Link>
        </x.div>
    )
}