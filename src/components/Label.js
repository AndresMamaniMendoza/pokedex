import styled from 'styled-components';

const StyledLabel = styled.label`
    background-color: blue;
    color: white;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
`;

function Label(props) {
    return (
        <div>
            <StyledLabel>{props.children}</StyledLabel>
        </div>
    );
}

export default Label;