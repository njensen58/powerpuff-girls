import { x } from "@xstyled/styled-components";
import image from '../assets/banner.webp';

export default function SiteHeader(){
    return (
        <x.div bg="#33ACE3" display="flex" justifyContent="center">
            <x.img src={image} alt={"Site Banner"} maxWidth={"100vw"} maxHeight={300}/>
        </x.div>
    )
}