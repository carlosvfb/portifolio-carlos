'use client';

import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function Contact() {
  const [state, handleSubmit] = useForm("mwpeogoz");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
      document.getElementById("contactForm")?.reset();
    }

    if (state.errors && state.errors.length > 0) {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
  }, [state.succeeded, state.errors]);

  return (
    <section className="p-20">
      <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
      <div className='flex justify-center items-center'>
        <form id="contactForm" onSubmit={handleSubmit} className="space-y-4 w-1/2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              className="mt-1 w-full"
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
          {showErrorAlert && (
            <div className="fixed bottom-4 right-4 z-50">
              <Alert variant="destructive">
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>Erro ao enviar a mensagem.</AlertDescription>
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
