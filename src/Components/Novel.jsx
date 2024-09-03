import { NOVEL } from "../Constants/index";
import Speach from "./Speach.jsx";

const Novel = () => {
    return (
        <div className="Novel">
            <div className="block">
                {NOVEL.map((project, index) => (
                        <Speach key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Novel;