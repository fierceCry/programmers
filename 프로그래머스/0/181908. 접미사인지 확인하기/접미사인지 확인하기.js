function solution(my_string, is_suffix) {
  if (is_suffix.length > my_string.length) {
    return 0;
  }
  const suffixFromMyString = my_string.slice(-is_suffix.length);

  if (suffixFromMyString === is_suffix) {
    return 1;
  } else {
    return 0;
  }
}
