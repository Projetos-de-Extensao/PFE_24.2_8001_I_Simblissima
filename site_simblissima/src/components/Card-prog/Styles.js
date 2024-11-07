import styled from 'styled-components';

const StyledWrapper = styled.div`
    .container-prog {
        display: grid;
        grid-template-columns: 1fr 
        justify-items: center;
        align-items: center;
        justify-content: center;
    }

    .itens-prog {
        font-weight: 500;
        margin: 5px;
        display: grid;
        align-items: center;
        text-align: center;
        min-width: 140px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.15) 0px 6px 6px;
        width: 300px;
        height: 300px;
        border-radius: 8px;
        background-color: #454545;
        transition: all 0.3s ease-in-out;
    }

    .prog{
        display: grid;
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    .titulo-prog {
        font-size: 30px;
    }

    .prog-data {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box-hora {
        display: flex;
        justify-content: center;

    }

    .prog-hora {
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        height: 60px;
        width: 60px;
        color: white;
        text-shadow: 1px 2px 0px rgba(0,0,0,0.7);
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
 

    @media (min-width: 700px) {
        .container {
            width: 100%;
        }

        .titulo-prog {
            font-size: 30px;
        }

        .prog-data {
            font-size: 20px;
        }

        .prog-hora {
            height: 60px;
            width: 60px;
        }

        .container-prog {
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
            align-items: center;
            justify-content: center;
        }

        .itens-prog {
            width: 230px;
        }
    }

    @media (min-width: 1023px) {
        .container {
            width: 100%;
        }

        .titulo-prog {
            font-size: 25px;
        }

        .prog-data {
            font-size: 15px;
        }

        .prog-hora {
            height: 60px;
            width: 60px;
        }

        .container-prog {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            justify-items: center;
            align-items: center;
            justify-content: center;
        }

        .itens-prog {
            width: 190px;
        }
    }
`;

export {StyledWrapper};