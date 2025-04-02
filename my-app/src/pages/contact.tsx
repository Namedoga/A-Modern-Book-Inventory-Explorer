import Layout from '../Layout/Layout';

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
}