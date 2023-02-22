import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: rgb(30, 46, 58);
    color: gray;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    font-color: white;
    cursor: pointer;
`;

function Button(props) {
    return (
        <div>
            <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
        </div>
    );
}

export default Button;