import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 350px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    
    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
    }
`;

export const CardImage = styled.img`
    width: auto;
    height: 170px;
    border-radius: 8px;
    margin-top: 12px;
    object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
  flex-grow: 1;
`;

export const CardTitle = styled.h3`
    font-size: 1.2em;
    margin:0px;
    text-transform: capitalize;
    text-align: center;
`;

export const CardPrice = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 12px;
    color: green;
`;

export const AddToCartButton = styled.button`
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      background-color: #0051bb;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
    }
`;
