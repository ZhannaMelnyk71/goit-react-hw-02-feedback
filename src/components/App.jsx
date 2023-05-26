import { Feedback } from 'components/feedback/Feedback'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        padding: 20,
      }}
    >
      <Feedback />
    </div>
  );
};
