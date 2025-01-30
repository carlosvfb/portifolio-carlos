'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { MdErrorOutline } from 'react-icons/md';
import { motion } from "framer-motion";
import { Send, SendHorizonal } from 'lucide-react';

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
        window.location.reload()
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
    const isFormValid = Object.values(inputValues).every(value => value.trim() !== '');

    if (isFormValid) {
      setIsValid(true);
      handleSubmit(e);
    } else {
      setIsValid(false);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
  };

  return (
    <section className="p-14">
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold">Entre em contato</h2>
          <p className="text-gray-600 dark:text-gray-300">
          Entre em contato comigo para colaborações, dúvidas ou oportunidades.
          </p>
        </motion.div>
      <div className='flex justify-center items-center'>
        <motion.form onSubmit={handleSubmitForm} className="space-y-4 w-full xl:w-1/2  rounded-lg p-8" initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Nome:</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome..."
              className="mt-1 w-full"
              value={inputValues.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">E-mail:</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail..."
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
            <label htmlFor="message" className="block text-sm font-medium">Mensagem:</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Sua mensagem..."
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
            className="border-[2.7px] border-[#000000] hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow inline-flex items-center px-4 py-3 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF] font-semibold rounded-lg shadow-md transition duration-300 bg-transparent gap-2"
          >
            Enviar <SendHorizonal size={16}/>
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
        </motion.form>
      </div>
    </section>
  );
}
