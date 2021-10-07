import { FC } from "react";
import { useHistory } from "react-router-dom";
import checkIcon from "../../../assets/icon/check.svg";
import { Button, Title } from "../../atoms";
import "./styles.css";

type NotificationModalProps = {
  visible: boolean;
};


const NotificationModal: FC<NotificationModalProps> = ({ visible }) => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/");
  };
  return (
    <>
      {visible ? (
        <div className="overlay">
          <div className="modal">
            <div className="mt-20 mb-20 w-90 ml-auto mr-auto">
              <img src={checkIcon} />
              <Title text="Sua conta foi criada com sucesso :)" />
              <Button type="primary" label="Começar" onClick={() => goToLogin()} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NotificationModal;
