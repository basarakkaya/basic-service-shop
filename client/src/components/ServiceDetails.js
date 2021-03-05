import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DiscountRate from './DiscountRate';
import Header from './Header';
import PriceRange from './PriceRange';
import Proceed from './Proceed';
import Question from './Question';

import { getQuestions } from '../api/questions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Page = styled.div`
  flex-grow: 1;
  overflow: auto;
  height: 100%;
  padding: 24px;
  padding-top: 0px;
`;

const ServiceDetails = ({ service, onCancel }) => {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState({ current: 0, total: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getQuestions(service.serviceId).then((res) => {
      setQuestions(res.questions);
      setPage({ current: 0, total: res.totalPages });
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  const onBack = () => setPage({ ...page, current: page.current - 1 });

  const proceed = () => {
    if (page.current + 1 !== page.total) {
      setPage({ ...page, current: page.current + 1 });
    } else {
      alert('Seçim tamamlandı');
    }
  };

  return (
    <Container>
      <Header
        label={service.name}
        progressPercentage={
          loading || !page.total ? 0 : 100 * ((page.current + 1) / page.total)
        }
        {...(page.current > 0 ? { onBack } : {})}
        onCancel={onCancel}
      />
      {service.price && <PriceRange price={service.price} />}
      {service.discountRateText && (
        <DiscountRate text={service.discountRateText} />
      )}
      <Page>
        {loading && <p>Yükleniyor...</p>}
        {questions.length > 0 &&
          questions
            .filter((question) => question.pageNumber === page.current)
            .map((question) => (
              <Question key={question.id} question={question} />
            ))}
      </Page>
      <Proceed onClick={proceed} label='Devam' />
    </Container>
  );
};

export default ServiceDetails;
