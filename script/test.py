from .compile import Node

import unittest

class TestNode(unittest.TestCase):

    def setUp(self):
        node = Node()
        node['abcd'] = '1'
        node['e'] = '2'
        node['sh'] = '3'
        node['shch'] = '4'
        self.node = node

    def test_single_transcript(self):
        self.assertEqual(self.node.transcript('abcd'), '1')
        self.assertEqual(self.node.transcript('e'), '2')
        self.assertEqual(self.node.transcript('sh'), '3')
        self.assertEqual(self.node.transcript('shch'), '4')

    def test_multi_transcript(self):
        self.assertEqual(self.node.transcript('abcdeshshch'), '1234')
        self.assertEqual(self.node.transcript('shchsheabcd'), '4321')

    def test_default_transcript(self):
        self.assertEqual(self.node.transcript('abce'), 'abc2')
        self.assertEqual(self.node.transcript('sht'), '3t')
        self.assertEqual(self.node.transcript('xyzshch'), 'xyz4')
        self.assertEqual(self.node.transcript('shchxyz'), '4xyz')
        self.assertEqual(self.node.transcript('xyz'), 'xyz')
