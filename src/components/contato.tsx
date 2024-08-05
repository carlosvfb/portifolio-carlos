'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { MdErrorOutline } from 'react-icons/md';

interface InputValues {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [state, handleSubmit] = useForm("mwpeogoz");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [inputValues, setInputValues] = useState<InputValues>({ name: '', email: '', message: '' });

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    }
  }, [state.succeeded]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação
    const isFormValid = Object.values(inputValues).every(value => value.trim() !== '');

    if (isFormValid) {
      setIsValid(true);
      handleSubmit(e);  // Continue com o envio do formulário
    } else {
      setIsValid(false);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
  };

  return (
    <section className="p-20">
      <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
      <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmitForm} className="space-y-4 w-1/2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              className="mt-1 w-full"
              value={inputValues.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              className="mt-1 w-full"
              value={inputValues.email}
              onChange={handleChange}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Mensagem</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Sua mensagem"
              className="mt-1 w-full"
              value={inputValues.message}
              onChange={handleChange}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 text-white flex items-center"
          >
            Enviar
          </Button>
          {state.submitting && <p className="text-blue-500">Enviando...</p>}
          {!isValid && <p className="text-red-500">Todos os campos devem ser preenchidos.</p>}
          {showErrorAlert && (
            <div className="fixed bottom-4 right-4 z-50">
              <Alert className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative dark:bg-red-700 dark:border-red-500 dark:text-red-100 flex gap-2" >
              <div className='-mt-[0.09rem] text-xl text-red-700 dark:text-red-100'>
                <MdErrorOutline  />
              </div>
              <div>
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>Todos os campos devem ser preenchidos.</AlertDescription>
              </div>
              </Alert>
            </div>
          )}
          {showSuccessAlert && (
            <div className="fixed bottom-4 right-4 z-50">
              <Alert className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative dark:bg-green-700 dark:border-green-500 dark:text-green-100'>
                <AlertTitle>Obrigado!</AlertTitle>
                <AlertDescription>Sua mensagem foi enviada com sucesso.</AlertDescription>
              </Alert>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
