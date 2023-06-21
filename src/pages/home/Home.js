import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Hero } from "../../components/home/Hero";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { Container, Form } from "react-bootstrap";

export const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Container className="mb-1">
        <div className="card-section mt-5">
          <div className="py-4 d-flex justify-content-between">
            <h3>Browse Library</h3>
            <div className="w-10">
              <Form.Control type="email" placeholder="Search" />
            </div>
          </div>
          <div className="d-flex gap-4 flex-wrap">
            <CustomCard
              title="Millionaire Success Habits"
              img="https://books.google.com.au/books/publisher/content?id=YG7NDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0LcMaUxjnABhtusC3931gHzKzjyw&w=1280"
              summary="This book is about replacing those things that are not serving your future with success habits designed specifically to assist you on your journey to a better you."
            />
            <CustomCard
              title="Millionaire Success Habits"
              img="https://books.google.com.au/books/publisher/content?id=YG7NDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0LcMaUxjnABhtusC3931gHzKzjyw&w=1280"
              summary="This book is about replacing those things that are not serving your future with success habits designed specifically to assist you on your journey to a better you."
            />
            <CustomCard
              title="Millionaire Success Habits"
              img="https://books.google.com.au/books/publisher/content?id=YG7NDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0LcMaUxjnABhtusC3931gHzKzjyw&w=1280"
              summary="This book is about replacing those things that are not serving your future with success habits designed specifically to assist you on your journey to a better you."
            />
            <CustomCard
              title="Millionaire Success Habits"
              img="https://books.google.com.au/books/publisher/content?id=YG7NDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0LcMaUxjnABhtusC3931gHzKzjyw&w=1280"
              summary="This book is about replacing those things that are not serving your future with success habits designed specifically to assist you on your journey to a better you."
            />
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
};
