export type IStatus = {
  pending: boolean;
  autoPay: boolean;
  paid: boolean;
};

export const statusInit: IStatus = {
  pending: true,
  autoPay: false,
  paid: false,
};
