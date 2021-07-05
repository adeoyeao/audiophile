import { Text, Button, Input } from "../../components";
import theme from "../../theme";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Context } from '../../store'
import { useContext } from 'react'
import { RESET } from '../../store/cart/cartTypes'

const StyledSection = styled.section`
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: grid;
  place-items: center;

  .card {
    width: 40vw;
    min-width: 200px;
    height: auto;
    border-radius: 0.5rem;
    background: ${theme.colors.white};
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .cardIcon {
      height: 4rem;
      width: 100%;
      background-image: url("/shared/desktop/check.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

const PaymentComplete = (props) => {
  const router = useRouter();
  const [ state, dispatch ] = useContext(Context)

  const handleClick = () => {
    router.push("/");
    props.backToHome();
    dispatch({ type: RESET })
  };

  return (
    <StyledSection>
      <div className="card">
        <div className="cardIcon" />
        <Text
          textType="secondary"
          text={`Thank you for your order`}
          align="center"
          color={theme.colors.black}
        />
        <Text
          textType="tertiary"
          text={`You will receive email confirmation shortly`}
          align="center"
          color={theme.colors.black}
        />
        <Button
          buttonType="primary"
          label="back to home"
          handleClick={handleClick}
        />
      </div>
    </StyledSection>
  );
};

export default PaymentComplete;
