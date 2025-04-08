import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import SEO from './SEO/SEO';
<SEO 
  title="Contact - Taib-massages"
  description="Prenez rendez-vous pour vos séances de massage ou cours de Pilates à Paris 18e"
  image="/images/taib.webp"
/>
const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

console.log('Clé API Web3Forms:', WEB3FORMS_KEY);

const Contact = ({ showOnlyForm = false }) => {
    const location = useLocation();
    const prestation = location.state?.prestation || '';
    const cadeau = location.state?.cadeau || '';

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Veuillez remplir le champ')
            .min(2, 'Le nom doit contenir au moins 2 caractères'),
        email: Yup.string()
            .email('Adresse mail invalide')
            .required('Veuillez remplir le champ')
            .max(255, 'L\'adresse email est trop longue'),
        message: Yup.string()
            .required('Veuillez remplir le champ')
            .min(10, 'Le message doit contenir au moins 10 caractères'),
        cadeau: Yup.string()
            .required('Veuillez remplir le champ')
            .max(50, 'La réponse doit contenir moins de 50 caractères'),
        prestation: Yup.string()
            .required('Veuillez remplir le champ')
            .max(50, 'La prestation doit contenir moins de 50 caractères'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
        try {
            if (!WEB3FORMS_KEY) {
                throw new Error('Clé API Web3Forms manquante');
            }
    
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: values.name,
                    email: values.email,
                    cadeau: values.cadeau,
                    prestation: values.prestation,
                    message: values.message,
                    subject: 'Voilà un nouveau client',
                    from_name: values.name,
                    reply_to: values.email
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'La requête a échoué');
            }
    
            const data = await response.json();
            console.log('Réponse:', data);
    
            if (data.success) {
                alert('Message envoyé avec succès !');
                resetForm();
            } else {
                throw new Error(data.message || 'Une erreur est survenue');
            }
        } catch (error) {
            console.error('Erreur détaillée:', error);
            setErrors({
                email: error.message
            });
            alert(`Erreur lors de l'envoi: ${error.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <div className="bg-[#f6e6d1] relative min-h-screen mt-16">
                <div 
                    className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-100"
                    aria-hidden="true"
                />

                <div className={`contact-form-section ${showOnlyForm ? '' : 'min-h-screen'} mt-8 sm:mt-8`}>
                    <Formik
                        initialValues={{ 
                            name: '', 
                            email: '', 
                            message: '',
                            prestation: prestation,
                            cadeau: cadeau
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <div className={`${showOnlyForm ? '' : 'min-h-screen'} flex items-center justify-center px-4 sm:px-8`}>
                                <div className="Form w-full max-w-2xl bg-white/50 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 mx-auto">
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h2 id='contacts' className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5d795d] mb-3 sm:mb-4'>
                                            Contactez moi !
                                        </h2>
                                        <p className='text-sm sm:text-base lg:text-lg text-gray-800 max-w-md mx-auto px-2'>
                                            Vous avez une question ou avez besoin d'un renseignement ? <br></br>Vous voulez offrir un cadeau à un proche, ou tout simplement prendre soins de vous !<br></br>Remplissez le formulaire avec vos informations pour m'envoyer un mail, auquel je répondrai ensuite.
                                        </p>
                                    </div>

                                    <Form className="space-y-4 sm:space-y-6">
                                        {/* Champs du formulaire avec styles responsifs */}
                                        <InputField name="name" type="text" placeholder="Votre Nom / Prénom" />
                                        <InputField name="email" type="email" placeholder="votre@email.com" />
                                        <InputField name="cadeau" type="text" placeholder="Est-ce un cadeau à offrir ?" />
                                        <InputField name="prestation" type="text" placeholder="Choix de la prestation" />
                                        <TextAreaField name="message" placeholder="Votre message..." />

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg 
                                                      font-bold text-white transition duration-150 ease-in-out
                                                      ${isSubmitting 
                                                        ? 'bg-[#80a880] cursor-not-allowed' 
                                                        : 'bg-[#80a880] hover:bg-green-800 active:bg-green-800 hover:shadow-lg'
                                                      }`}
                                        >
                                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

// Composants réutilisables pour les champs de formulaire
const InputField = ({ name, type, placeholder }) => (
    <div className="space-y-1 sm:space-y-2">
        <Field
            type={type}
            name={name}
            className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl 
                       border-2 border-gray-200 bg-gray-50 
                       focus:border-blue-400 focus:ring-blue-400 focus:outline-none 
                       transition duration-150 ease-in-out
                       text-sm sm:text-base"
            placeholder={placeholder}
        />
        <ErrorMessage name={name} component="div" className="text-red-500 text-xs sm:text-sm mt-1 text-center" />
    </div>
);

const TextAreaField = ({ name, placeholder }) => (
    <div className="space-y-1 sm:space-y-2">
        <Field
            as="textarea"
            name={name}
            rows="4"
            className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl 
                       border-2 border-gray-200 bg-gray-50 
                       focus:border-blue-400 focus:ring-blue-400 focus:outline-none 
                       transition duration-150 ease-in-out resize-none
                       text-sm sm:text-base"
            placeholder={placeholder}
        />
        <ErrorMessage name={name} component="div" className="text-red-500 text-xs sm:text-sm mt-1 text-center" />
    </div>
);

export default Contact;