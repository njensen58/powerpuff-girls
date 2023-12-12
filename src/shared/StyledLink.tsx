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
					justifyContent="center"
					bg="#81CB71" 
					padding={2}
					borderRadius="md"
					borderColor="black"
					borderWidth={1}
					marginLeft="auto"
				>
            <Link to={props.to} state={props.state}>{props.text}</Link>
        </x.div>
    )
}