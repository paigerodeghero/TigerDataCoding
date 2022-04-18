import { useNavigate } from 'react-router-dom';
import "./Main.css";
import clemsonLogo from '../assets/clemsonLogo.png';

function Main() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/');
    }

    return (
        <div className="min-h-screen text-gray-800">
            <div className="topnav">
                <div className='logo'>
                    <img
                        src={clemsonLogo}
                        className="object-scale-down h-12 object-center mx-auto"
                    ></img>
                </div>
                <div className="title">TIGER DATA CODING TOOL</div>
                <div
                    className="topbarbutton"
                    onClick={goToLogin}
                >
                    LOGOUT
                </div>
                {/* <div className="topbarbutton">DATASETS</div>
                <div className="topbarbutton">CODEBOOKS</div> */}
            </div>

            <div className="buttons">
                <button type="button" className="block1">CODEBOOKS</button>
                <button type="button" className="block2">DATASETS</button>
            </div>

        </div>
    );
}
export default Main;
