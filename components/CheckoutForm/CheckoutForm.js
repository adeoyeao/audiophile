import { Text, Button, Input } from '../../components';
import theme from '../../theme'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledForm = styled.form`
    padding: 9rem 10vw 3rem 10vw;
    display: flex;
    flex-direction: column;
    grid-gap: 3rem;

    .inputs {
        display: grid;
        grid-gap: 3rem;
    }

    .backBtn {
        text-align: left;
        width: 4rem;
        background: none;

        &:hover {
            color: ${theme.colors.primary}
        }
    }

    @media screen and (min-width: 768px) {
        .inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`

const CheckoutForm = () => {
    const router = useRouter()
    
    return (
        <StyledForm>
            <button onClick={() => router.push('/')} className='backBtn'>
                Go Back
            </button>
            <Text 
                textType='secondary'
                text='Checkout'
                color={theme.colors.black}
            />
            <Text 
                textType='tertiary'
                text='Billing Details'
                color={theme.colors.primary}
            />
            <div className='inputs'>
                <Input 
                    label='Name'
                    placeholder='Jane Appleseed'
                    start={1}
                    end={2}
                />
                <Input 
                    label='Email Address'
                    placeholder='jane.appleseed@gmail.com'
                    start={2}
                    end={3}
                />
                <Input 
                    label='Phone Number'
                    placeholder='07500 123 123'
                    start={1}
                    end={2}
                />
            </div>
            <Text 
                textType='tertiary'
                text='Shipping Info'
                color={theme.colors.primary}
            />
            <div className='inputs'>
                <Input 
                    label='Your Address'
                    placeholder='38 Main Street'
                    start={1}
                    end={3}
                />
                <Input 
                    label='Postcode'
                    placeholder='EC1A 1AA'
                    start={1}
                    end={2}
                />
                <Input 
                    label='City'
                    placeholder='London'
                    start={2}
                    end={3}
                />
                <Input 
                    label='Country'
                    placeholder='United Kingdom'
                    start={1}
                    end={2}
                />
            </div>
            <Text 
                textType='tertiary'
                text='Payment Details'
                color={theme.colors.primary}
            />
            <div className='inputs'>
                <Input 
                    label='Cardholder Name'
                    placeholder='Jane Appleseed'
                    start={1}
                    end={2}
                />
                <Input 
                    label='Card Number'
                    placeholder='5555 5555 5555 5555'
                    start={2}
                    end={3}
                />
                <Input 
                    label='Start Date'
                    placeholder='01/21'
                    start={1}
                    end={2}
                />
                <Input 
                    label='Expiry Date'
                    placeholder='01/26'
                    start={2}
                    end={3}
                />
                <Input 
                    label='CSC'
                    placeholder='000'
                    start={1}
                    end={2}
                />
            </div>
        </StyledForm>
    )
}

export default CheckoutForm
