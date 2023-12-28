import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  it("renders title", () => {
    const wrapper = shallowMount(App);

    expect(wrapper.find("h1").text()).toMatch("Todo App");
  });

  it("renders label, input", () => {
    const wrapper = shallowMount(App)

    expect(wrapper.find("label").text()).toMatch("할 일 작성")

    expect(wrapper.find("input").attributes("placeholder")).toMatch("할 일을 작성해주세요")
  })
});