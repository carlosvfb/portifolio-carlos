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
    <section className="py-20">
      <div className="container px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Entre em contato
          </h2>
          <p className="text-muted-foreground">
            Transforme sua ideia em uma solução digital de alto desempenho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <motion.form
          onSubmit={handleSubmitForm}
          className="lg:col-span-7 space-y-4 rounded-2xl bg-surface-2/60 backdrop-blur-sm ring-1 ring-outline-variant/40 p-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome..."
              className="mt-2 w-full bg-surface-3/50 border-outline-variant/50"
              value={inputValues.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground">E-mail</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail..."
              className="mt-2 w-full bg-surface-3/50 border-outline-variant/50"
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
            <label htmlFor="message" className="block text-sm font-semibold text-foreground">Mensagem</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Sua mensagem..."
              className="mt-2 w-full min-h-32 bg-surface-3/50 border-outline-variant/50"
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
            className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold hover:brightness-110 gap-2"
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
        <motion.aside
          className="lg:col-span-5 rounded-2xl bg-surface-2/60 backdrop-blur-sm ring-1 ring-outline-variant/40 p-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          <h3 className="text-xl font-extrabold tracking-tight text-foreground">Vamos construir algo juntos</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Se você está buscando alguém para tirar uma ideia do papel, melhorar performance ou elevar a qualidade do produto, posso ajudar.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-surface-3/50 ring-1 ring-outline-variant/40 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Localização</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Brasil</p>
            </div>
            <div className="rounded-xl bg-surface-3/50 ring-1 ring-outline-variant/40 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Disponibilidade</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Aberto a oportunidades</p>
            </div>
            <div className="rounded-xl bg-surface-3/50 ring-1 ring-outline-variant/40 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Redes</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/carlos-v%C3%ADtor-faria-barboza?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTAXLngDWRc%2B0dl5fPB0aAA%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-surface-4/40 px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-outline-variant/40 transition hover:bg-surface-4/60"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/carlosvfb"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-surface-4/40 px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-outline-variant/40 transition hover:bg-surface-4/60"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.aside>
        </div>
      </div>
    </section>
  );
}
