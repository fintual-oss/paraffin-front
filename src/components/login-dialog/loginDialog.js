import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import useLoginDialog from '@hooks/useLoginDialog';
import { useRouter } from 'next/router';
import style from './loginDialog.module.scss';

export const LoginDialog = () => {
  const loginDialog = useLoginDialog();
  const router = useRouter();
  const footer = () => {
    return (
      <Button
        label="Ingresar"
        onClick={() =>
          router.push('/users/sign_in?redirect_to=' + router.asPath)
        }
      />
    );
  };

  return (
    <Dialog
      visible={loginDialog.displayLoginDialog}
      className={style.dialogLogin}
      onHide={() => loginDialog.setDisplayLoginDialog(false)}
      header="¡Únete a ser.dev!"
      footer={footer()}
    >
      <p> Construyamos juntos una gran comunidad de aprendizaje</p>
      <p>
        Ingresando con tu cuenta puedes guardar tu progreso y ayudar a la
        comunidad añadiendo nuevos recursos y evaluando los existentes.
      </p>
    </Dialog>
  );
};
