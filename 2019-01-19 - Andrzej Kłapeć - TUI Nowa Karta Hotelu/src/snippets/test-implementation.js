it('calls onDateSelect prop when year has changed', () => {
  const spy = sinon.spy();
  const wrapper = shallow(<BirthDate onDateSelect={spy} />);
  const yearSelect = wrapper.find('.birth-date__field--year');

  yearSelect.simulate('change', { target: { value: '2009' } });

  expect(spy.calledOnce).toBe(true);
  expect(spy.args).toEqual([[0, null]]);
});
