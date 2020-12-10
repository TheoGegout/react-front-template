import React from 'react';
import Button from './Button';
import Input from './Input';

const BarathonForm = (): JSX.Element => {

    const handleSubmit = (): void => {

    };

    return (
        <form onSubmit={handleSubmit}>
            <Input label='Nom' name="name" type="text" placeholder='Nom de votre parcours' />
            <Input label='Auteur' name="author" type="text" placeholder='Votre pseudo' />
            <Button type='submit'>Soumettre</Button>
        </form>
    );
};

export default BarathonForm;