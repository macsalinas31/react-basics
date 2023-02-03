import Inquire from "./Inquire";
import Body from './Body';

function Main (){
    return (
        <>
    <div className="main-article">
        <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
                <div className="row">
                    <div className="col-10"><Inquire/></div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
        <h3 className="text-main">"Every picture has it's own story"</h3>
    </div>
        </>
    )
}
export default Main;