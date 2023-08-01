import styled from "styled-components";

const Welcome = styled.h1`
    font-size: 40px;
    font-weight: 1000;
    color: #000000ac;
`

const WelcomePage = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div><Welcome>Welcome 👋</Welcome></div>
        </div>
    );
};

export default WelcomePage;