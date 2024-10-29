import { config } from 'dotenv';

module.exports = () => {
  config({ path: '.env.test' });
}
