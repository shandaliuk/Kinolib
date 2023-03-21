import { Screen } from './LoadingScreen.styled';

export const LoadingScreen = ({ isLoading }) => {
  return (
    isLoading && (
      <Screen
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: 'circOut' },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, ease: 'circIn' },
        }}
      />
    )
  );
};
