import FunnelContainer from '@/components/FunnelContainer';

const Index = () => {
  const handleScoreUpdate = (score: number) => {
    // Score update handler
    console.log('Score updated:', score);
  };

  return <FunnelContainer onScoreUpdate={handleScoreUpdate} />;
};

export default Index;
