import Toast, { ToastType } from 'react-native-toast-message';

const useCustomToast = () => {
  const show = ({ type, content }: { type: ToastType; content: string }) => {
    Toast.show({
      type: type,
      text2: content,
    });
  };

  return { show };
};

export default useCustomToast;
