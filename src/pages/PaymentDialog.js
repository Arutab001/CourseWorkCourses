import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Box, Container, DialogContent} from "@mui/material";

const PaymentDialog = (props) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardOwner, setCardOwner] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');
    const [cardCVV, setCardCVV] = useState('');

    const handleCardNumberChange = (e) => {
        // Допустим ввод только цифр для номера карты
        let value = e.target.value.replace(/\D/g, '');
        value = value.slice(0, 16);
        setCardNumber(value);
    };

    const handleCardOwnerChange = (e) => {
        const onlyLettersAndSpaces = e.target.value.replace(/[^A-Za-z\s]/g, '').toUpperCase();
        setCardOwner(onlyLettersAndSpaces);
    };
    const handleCardExpirationChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2); // Добавляем разделитель '/'
        }
        if (value.length > 5) {
            value = value.slice(0, 5); // Ограничиваем до формата MM/YY
        }
        setCardExpiration(value);
    };
    const handleCardCVVChange = (e) => {
        // Допустим ввод только цифр для CVV и ограничение до 4 цифр
        let value = e.target.value.replace(/\D/g, '');
        value = value.slice(0, 4);
        setCardCVV(value);
    };

    const handleBuy = () => {
        // Реализация логики покупки или обработки данных карты
        console.log('Карта для оплаты:', {
            cardNumber,
            cardOwner,
            cardExpiration,
            cardCVV,
        });

        // Дополнительная логика покупки или отправки данных о карте на сервер
        // ...

        // Закрытие диалогового окна после завершения операции
        handleClose();
    };

    const handleClose = () => {
        // Дополнительные действия при закрытии диалогового окна
        // Сброс значений полей ввода, если необходимо
        setCardNumber('');
        setCardOwner('');
        setCardExpiration('');
        setCardCVV('');
        props.setOpenDialog(false);
    };

    return (
        <Dialog open={props.open}>
            <DialogContent>
                <TextField
                    label="Номер карты"
                    value={cardNumber}
                    sx={{width: "100%"}}
                    onChange={handleCardNumberChange}
                />
            </DialogContent>

            <Container sx={{display: "flex", flexDirection: "row"}}>
                <DialogContent>
                    <TextField
                        label="Дата окончания"
                        value={cardExpiration}
                        onChange={handleCardExpirationChange}
                    />
                </DialogContent>

                <DialogContent>
                    <TextField
                        label="CVV"
                        value={cardCVV}
                        onChange={handleCardCVVChange}
                    />
                </DialogContent>
            </Container>
            <DialogContent>
                <TextField
                    label="Владелец карты"
                    value={cardOwner}
                    sx={{width: "100%"}}
                    onChange={handleCardOwnerChange}
                />
            </DialogContent>
            <DialogContent>
                <Container sx={{display: "flex", justifyContent: "flex-end"}}>
                    <Button onClick={handleBuy} variant="contained" color="primary" sx={{marginRight: "1vw"}}>
                        Купить
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="primary">
                        Отмена
                    </Button>
                </Container>
            </DialogContent>
        </Dialog>
    );
};

export default PaymentDialog;
