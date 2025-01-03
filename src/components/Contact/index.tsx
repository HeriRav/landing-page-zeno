import React, {FormEvent, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import imgContact from "../../images/bg-contact.png"
import "./index.css"

const Contact = () => {

    const [formData, setFormData] = useState({
        user_name: '',
        user_tel: '',
        user_email: '',
        message: ''
    });
    const [isChecked, setIsChecked] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const form = useRef<HTMLFormElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const isFormValid = (): boolean => {
        const { user_name, user_tel, user_email, message } = formData;
        return user_name.trim() !== '' && user_tel.trim() !== '' && user_email.trim() !== '' && message.trim() !== '' && isChecked;
    };

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!formData) {
            console.error("Saisie(s) manquante(s)");
            setOpenNull(true);
            return;
        }

        if (!emailRegex.test(formData.user_email)) {
            console.error("Format d'email invalide");
            setOpenEmail(true);
            return;
        }

        if (form.current) {
        emailjs
            .sendForm('service_fq5wpzg', 'template_d7gjah8', form.current, 'Ulsx7v6V_GQuZVMda')
            .then(
            () => {
                setOpen(true);
                console.log('SUCCESS!');
                form.current?.reset();
                setFormData({ user_name: '', user_email: '', user_tel: '', message: '' });
                setIsChecked(false);
            },
            (error) => {
                console.log('FAILED...', error.text);
                form.current?.reset();
                setFormData({ user_name: '', user_email: '', user_tel: '', message: '' });
                setIsChecked(false);
            }
            );
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    const [open, setOpen] = React.useState(false);
    const [openNull, setOpenNull] = useState(false);
    const [openEmail, setOpenEmail] = React.useState(false);

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
        setOpenNull(false);
        setOpenEmail(false);
    };

    return (
        <main id='contact' className='relative bg-gray-200 mt-20 scroll-mt-20'>
            <div className='py-10 bg-secondary text-white text-center text-xl md:text-3xl/6 block lg:hidden' data-aos="fade-in">
                <span className='flex flex-col'>Un projet ?</span>
                <span className='flex flex-col'>Nous vous aidons</span>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-1' data-aos="fade-left">
                <div className='py-10'>
                    <div className='py-10 hidden md:absolute lg:block bg-secondary text-white font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-right right-0 top-0 lg:top-0 w-[1000px] lg:w-[800px] xl:w-[1200px] 2xl:w-[1200px] h-full background' data-aos="fade-left">
                        <span className='flex flex-col mt-28 text-right right-0 mr-8 lg:mr-16 xl:mr-20'>Un projet ?</span>
                        <span className='flex flex-col text-right right-0 mr-8 lg:mr-16 xl:mr-20'>Nous vous aidons</span>
                    </div>
                    <form className="max-sm:px-4 max-w-xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl mr-auto mx-auto lg:ml-16 xl:ml-20 2xl:ml-20" data-aos="zoom-left" ref={form}>
                        <div className="mb-2">
                            <input type="text" id="name" name='user_name' value={formData.user_name} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="Nom*" required />
                        </div>
                        <div className="mb-2">
                            <input type="tel" id="tel" name='user_tel' value={formData.user_tel} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="Tel*" required />
                        </div>
                        <div className="mb-2">
                            <input type="email" id="email" name='user_email' value={formData.user_email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="E-Mail*" required />
                        </div>
                        <div className="mb-2">
                            <textarea rows={1} id="message" name='message' value={formData.message} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-4 pb-12 pt-3" placeholder='Message*' />
                        </div>
                        <div className='mb-6'>
                            <input type="checkbox" id='condition' checked={isChecked} onChange={handleCheckboxChange} />
                            <label htmlFor="condition" className='text-sm'>&nbsp;En cliquant sur ce bouton, vous acceptez les termes et conditions</label>
                        </div>
                        <button type="submit" className={`btn-text font-bold text-white px-12 py-4 rounded-full  transition-all duration-200 ease-linear ${isFormValid() ? 'bg-primary cursor-pointer hover:bg-primary/80' : 'bg-gray-400 cursor-not-allowed'}`} onClick={sendEmail} disabled={!isFormValid()}>Envoyer</button>
                    </form>
                    <div className='hidden 2xl:grid'>
                        <img src={imgContact} alt="Image contact"
                        className='absolute w-[575px] top-0 right-0 mr-[560px] 2xl:mr-[350px] bg-image' />
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Message envoyé avec succès !
                </Alert>
            </Snackbar>
            <Snackbar open={openNull} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="warning"
                    variant="filled"
                    sx={{ width: '100%' }}
                    >
                    Veuillez remplir les champs obligatoire !
                </Alert>
            </Snackbar>
            <Snackbar open={openEmail} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="warning"
                    variant="filled"
                    sx={{ width: '100%' }}
                    >
                    Veuillez saisir une adresse e-mail valide !
                </Alert>
            </Snackbar>
        </main>
    )
}

export default Contact