import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CoffeCardComponent } from '../app/components/coffe-card.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CoffeCardComponent> = {
  title: 'Example/CoffeCard',
  component: CoffeCardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgOptimizedImage],
    }),
  ],
  // render: (args: CoffeCardComponent) => ({
  //   props: {
  //     backgroundColor: null,
  //     ...args,
  //   },
  // }),
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
};

export default meta;
type Story = StoryObj<CoffeCardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    coffe: {
      "id": 1,
      "name": "Cappuccino",
      "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
      "price": "$5.20",
      "rating": 4.7,
      "votes": 65,
      "popular": true,
      "available": true
    },
  },
};
