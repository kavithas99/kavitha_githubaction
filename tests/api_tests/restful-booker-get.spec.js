import { test, expect } from '@playwright/test';
import createbooking from '../../data/Createbooking.json';
import commonAPIutil from '../../commonUtils/commonAPIutil';

let apiUtil;
test('Get Booking IDs', { tag: ['@regression', '@smoke'], annotation: { type: 'test case', Description: 'Test to get all booking IDs' } }, async ({ request }) => {

    const response = await request.get('https://restful-booker.herokuapp.com/booking');
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
    expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');
    expect(responseBody).not.toBeNull();


})

test('createbookin', { tag: ['@regression', '@smoke'], annotation: { type: 'test case', Description: 'Test to create a booking' } }, async ({ request }) => {

    const response = await request.post('https://restful-booker.herokuapp.com/booking', { data: createbooking.Requestbodybooking })

    const jsonrespnse = await response.json();
    console.log(jsonrespnse);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
    expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');
    expect(jsonrespnse.booking).toMatchObject(createbooking.Requestbodybooking);
})

test('patch booking', { tag: ['@regression', '@smoke'], annotation: { type: 'test case', Description: 'Test to patch a booking' } }, async ({ request }) => {
    apiUtil = new commonAPIutil(request);
    const token = await apiUtil.Authenticationtoken(request);
    console.log(token);
    const response = await request.patch('https://restful-booker.herokuapp.com/booking/204', { data: createbooking.patchbody, headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Cookie': `token=${token}` } })
    const jsonrespnse = await response.json();

    console.log(jsonrespnse);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
    expect(jsonrespnse.firstname).toBe(createbooking.patchbody.firstname);
    expect(jsonrespnse.lastname).toBe(createbooking.patchbody.lastname);
})

test('delete booking', { tag: ['@regression', '@smoke'], annotation: { type: 'test case', Description: 'Test to delete a booking' } }, async ({ request }) => {
    apiUtil = new commonAPIutil(request);
    const token = await apiUtil.Authenticationtoken(request);
    console.log(token);
    const response = await request.delete('https://restful-booker.herokuapp.com/booking/204', { headers: { 'Cookie': `token=${token}` } });
    expect(response.status()).toBe(201);
    expect(response.statusText()).toBe('Created');
})
